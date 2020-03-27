//
//  TermsViewController.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/27.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class TermsViewController: UIViewController {
    
    @IBOutlet weak var termTextView: UITextView!
    
    let actionSheetController: UIAlertController = {
        let actionSheet = UIAlertController(title: nil, message: nil, preferredStyle: .actionSheet)
        return actionSheet
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
    
        setupUI()
        setupActionSheetHandlers()
    }
    
    private func setupActionSheetHandlers() {
        let agreeAction = UIAlertAction(title: "동의", style: .default) { (_) in
            self.didSelectAction(hasAgreed: true)
        }
        agreeAction.setValue(UIColor(named: "KeyColor"), forKey: "titleTextColor")
        
        let cancelAction = UIAlertAction(title: "취소", style: .cancel, handler: { (_) in
            self.didSelectAction(hasAgreed: false)
        })
        actionSheetController.addAction(agreeAction)
        actionSheetController.addAction(cancelAction)
    }
    
    override func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)
        present(actionSheetController, animated: true, completion: nil)
    }
    
    private func didSelectAction(hasAgreed: Bool) {
        self.dismiss(animated: true, completion: nil)
    }
    
    private func setupUI() {
        view.alpha = 0.95
        termTextView.layer.borderColor = UIColor.darkGray.cgColor
        termTextView.layer.borderWidth = 1
    }
}
