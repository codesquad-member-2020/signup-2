//
//  InterestViewController.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/28.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class InterestViewController:  UIViewController {
    
    @IBOutlet weak var interestInputTextField: InterestTextField!
    @IBOutlet weak var collectionView: UICollectionView!
    @IBOutlet weak var nextButton: PersonalInfoNextButton!
    
    let interestViewModel = InterestViewModel()
    
    let interestCollectionViewDataSource = InterestCollectionViewDataSource()
    let interestCollectionViewDelegate = InterestCollectionViewDelegate()

    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupCollectionView()
        interestViewModel.didFinishChangingInterests = { isValid in
            self.collectionView.reloadData()
            self.interestInputTextField.text = ""
            self.nextButton.isValid = isValid
        }
        interestInputTextField.didFinishTextingInterest = { (text) in
            self.interestViewModel.addInterest(text)
        }
        interestCollectionViewDataSource.interestViewModel = interestViewModel
        interestCollectionViewDelegate.interestViewModel = interestViewModel
    }
    
    private func setupCollectionView() {
        collectionView.dataSource = interestCollectionViewDataSource
        collectionView.delegate = interestCollectionViewDelegate
        collectionView.semanticContentAttribute = .forceLeftToRight
    }
    
    @IBAction func previousButtonTapped(_ sender: Any) {
        navigationController?.popViewController(animated: true)
    }
    
    @IBAction func nextButtonTapped(_ sender: Any) {
        
    }
}
