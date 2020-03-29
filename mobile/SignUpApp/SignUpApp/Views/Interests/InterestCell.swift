//
//  InterestCell.swift
//  SignUpApp
//
//  Created by Cory Kim on 2020/03/28.
//  Copyright © 2020 corykim0829. All rights reserved.
//

import UIKit

class InterestCell: UICollectionViewCell {
    
    var interest: String = "" {
        didSet {
            interestLabel.text = interest
        }
    }
    
    let keyColor = UIColor(named: "KeyColor")
    
    lazy var containerView: UIView = {
        let view = UIView()
        view.backgroundColor = keyColor
        return view
    }()
    
    let interestLabel: UILabel = {
        let label = UILabel()
        label.textColor = .black
        label.font = .systemFont(ofSize: 16, weight: .bold)
        return label
    }()
    
    let deleteButton: InterestDeleteButton = {
        let button = InterestDeleteButton(type: .system)
        let image = UIImage(named: "xmark.circle.fill")
        button.setImage(image?.withRenderingMode(.alwaysOriginal), for: .normal)
        button.imageView?.contentMode = .scaleAspectFill
        button.imageView?.tintColor = .white
        button.translatesAutoresizingMaskIntoConstraints = false
        button.widthAnchor.constraint(equalTo: button.heightAnchor, multiplier: 1).isActive = true
        return button
    }()
    
    func setButtonIndex(_ index: Int) {
        deleteButton.setIndex(index)
    }
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        configure()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
        configure()
    }
    
    private func configure() {
        setupUI()
    }
    
    let containerViewMargin: CGFloat = 4
    let interestBlockHeight: CGFloat = 32
    
    private func setupUI() {
        backgroundColor = .clear
        addSubview(containerView)
        containerView.heightAnchor.constraint(equalToConstant: interestBlockHeight).isActive = true
        containerView.layer.cornerRadius = interestBlockHeight / 2
        containerView.translatesAutoresizingMaskIntoConstraints = false
        containerView.topAnchor.constraint(equalTo: topAnchor, constant: containerViewMargin).isActive = true
        containerView.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -containerViewMargin).isActive = true
        containerView.leadingAnchor.constraint(equalTo: leadingAnchor, constant: containerViewMargin).isActive = true
        containerView.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -containerViewMargin).isActive = true
        let stackView = UIStackView(arrangedSubviews: [interestLabel, deleteButton])
        stackView.axis = .horizontal
        addSubview(stackView)
        stackView.translatesAutoresizingMaskIntoConstraints = false
        stackView.topAnchor.constraint(equalTo: containerView.topAnchor, constant: 4).isActive = true
        stackView.bottomAnchor.constraint(equalTo: containerView.bottomAnchor, constant: -4).isActive = true
        stackView.leadingAnchor.constraint(equalTo: containerView.leadingAnchor, constant: 8).isActive = true
        stackView.trailingAnchor.constraint(equalTo: containerView.trailingAnchor, constant: -4).isActive = true
        stackView.spacing = 4
        interestLabel.setContentHuggingPriority(.defaultLow, for: .horizontal)
    }
}
